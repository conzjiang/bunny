module Authentication
  extend ActiveSupport::Concern

  include BCrypt

  PASSWORD_MIN_LENGTH = 6

  included do
    validates :password_digest, presence: true
    validates :session_token, presence: true, uniqueness: true
    validates :password, length: { minimum: PASSWORD_MIN_LENGTH, allow_nil: true }

    attr_reader :password

    after_initialize :ensure_session_token

    def self.find_by_credentials(username, password)
      user = find_by(username: username)
      return nil if user.nil?
      user.is_password?(password) ? user : nil
    end
  end

  def is_password?(password)
    Password.new(password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = Password.create(password)
  end

  def reset_session_token!
    self.session_token = random_token
    save!
    session_token
  end

  private

  def ensure_session_token
    self.session_token ||= random_token
  end

  def random_token
    SecureRandom.urlsafe_base64(16)
  end
end
