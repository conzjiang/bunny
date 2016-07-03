describe User do
  subject(:user) { create(:user) }

  it_behaves_like "it's authenticated"

  it { should validate_presence_of(:username) }
  it { should validate_uniqueness_of(:username) }
  it { should have_many(:lists) }
end
