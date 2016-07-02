shared_examples "it's authenticated" do
  it { should validate_presence_of(:password_digest) }
  it { should validate_presence_of(:session_token) }
  it { should validate_uniqueness_of(:session_token) }

  describe '#password' do
    it { should validate_length_of(:password) }

    it 'is allowed to be nil' do
      subject.password = nil
      expect(subject).to be_valid
    end
  end

  describe '.find_by_credentials' do
    let!(:conz) { create(:user, username: 'conz', password: 'passwordy') }
    let!(:carl) { create(:user, username: 'carl', password: '123456') }

    it 'returns the user with the matching username and password' do
      expect(User.find_by_credentials('conz', 'passwordy')).to eq(conz)
    end

    it 'returns nil if no matching username' do
      expect(User.find_by_credentials('turtle', '123456')).to be_nil
    end

    it 'returns nil if password is incorrect' do
      expect(User.find_by_credentials('conz', '123456')).to be_nil
    end
  end

  describe '#password=' do
    it 'sets the password temporarily' do
      user = User.new(username: 'conz')
      user.password = 'password'

      expect(user.password).to eq('password')

      user.save!
      new_instance = User.find_by(username: user.username)

      expect(new_instance.password).to be_nil
    end

    it 'sets the password_digest' do
      user = User.new
      expect(user.password_digest).to be_nil

      user.password = 'password'
      expect(user.password_digest).not_to be_nil
    end
  end

  describe '#reset_session_token!' do
    let(:user) { build(:user, session_token: 'abc') }

    before :each do
      allow(user).to receive(:random_token) { 'def' }
    end

    it 'sets the session token to a new random token' do
      user.reset_session_token!
      expect(user.session_token).to eq('def')
    end

    it 'saves the new session token' do
      user.reset_session_token!
      expect(User.find_by(username: user.username).session_token).to eq('def')
    end

    it 'returns the new session token' do
      expect(user.reset_session_token!).to eq('def')
    end
  end

  describe '#ensure_session_token' do
    it 'always has a session token upon initialization' do
      user = build(:user)
      expect(user.session_token).not_to be_nil
    end
  end
end
