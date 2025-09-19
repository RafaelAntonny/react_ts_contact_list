export type Tag = {
  id: number;
  label: string;
  color?: string;
  kind?: 'group' | 'tag';
};

class ContactModel {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  tags: Tag[];

  constructor(
    id: number,
    name: string,
    email: string,
    phoneNumber: string,
    tags: Tag[]
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.tags = tags;
  }
}

export default ContactModel;
