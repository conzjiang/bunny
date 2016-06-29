FactoryGirl.define do
  factory :user do
    username { Faker::Internet.user_name }
    password { Faker::Internet.password(Authentication::PASSWORD_MIN_LENGTH) }
  end
end
