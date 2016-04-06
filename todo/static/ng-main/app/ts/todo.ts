export interface TodoListElement{
	id: string;
	timestamp: TimeRanges;
	title: string;
	todo: URL;
	url: URL;
}

export interface Todo{
	id: string;
	list: TodoListElement[];
	owner: URL;
	timestamp: TimeRanges;
	title: string;
	url: URL;
}