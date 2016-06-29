describe User do
  subject(:user) { create(:user) }
  it_behaves_like "it's authenticated"
end
