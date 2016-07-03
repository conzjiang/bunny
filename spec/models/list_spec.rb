describe List do
  it { should validate_presence_of(:title) }
  it { should validate_presence_of(:user_id) }
  it { should validate_uniqueness_of(:title).scoped_to(:user_id) }
  it { should belong_to(:user) }
end
