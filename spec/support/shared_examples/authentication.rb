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
end
