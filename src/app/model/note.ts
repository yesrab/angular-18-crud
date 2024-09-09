export interface Notes {
  title: string;
  description: string;
  priority: Number;
  isCompleated: boolean;
  id: string;
}



export class Note implements Notes {
  id: string;
  title: string;
  description: string;
  priority: Number;
  isCompleated: boolean;
  constructor(title: string, description: string, isCompleated: boolean, priority: Number) {
    this.id = crypto.randomUUID()
    this.title = title
    this.description = description
    this.isCompleated = isCompleated
    this.priority = priority
  }
}