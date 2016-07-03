class List < ActiveRecord::Base
  validates :title, :user_id, presence: true
  validates :title, uniqueness: { scope: :user_id }

  belongs_to :user
end
