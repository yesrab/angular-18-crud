export interface Notes {
  title: string;
  description: string;
  priority: number;
  isCompleated: boolean;

}

export class Note implements Notes {
  title: string;
  description: string;
  priority: number;
  isCompleated: boolean;
  id: string;

  constructor(priority: number) {
    this.title = '';
    this.description = '';
    this.isCompleated = false;
    this.priority = priority;
    this.id = crypto.randomUUID();
  }
}