class TagModel {
  id: number;
  label: string;
  color: string;
  kind: 'group' | 'tag';
  contactIds: number[];

  constructor(
    id: number,
    label: string,
    color: string,
    kind: 'group' | 'tag',
    contactsIds: number[]
  ) {
    this.id = id;
    this.label = label;
    this.color = color;
    this.kind = kind;
    this.contactIds = contactsIds;
  }
}

export default TagModel;
