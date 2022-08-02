import { v4 as uuidv4 } from 'uuid';

export default class TodoItem
{
  constructor(name, description, dueDate, project, priority, checkboxStatus)
  {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.project = project;
    this.priority = priority;
    this.id = uuidv4();
    this.checkboxStatus = checkboxStatus;
  }
} 