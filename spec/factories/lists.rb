FactoryGirl.define do
  factory :list do
    title { Faker::Hipster.sentence(3) }
    association :user, factory: :user
  end
end
