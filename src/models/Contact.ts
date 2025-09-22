class ContactModel {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  tagIds: number[];

  constructor(
    id: number,
    name: string,
    email: string,
    phoneNumber: string,
    tagIds: number[]
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.tagIds = tagIds;
  }
}

export default ContactModel;
