class User < ActiveRecord::Base
  include Authentication

  validates :username, presence: true, uniqueness: true
end
