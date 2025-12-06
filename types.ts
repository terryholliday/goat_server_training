
export interface Wine {
  producer: string;
  name: string;
  appellation: string;
  region: string;
  country: string;
  grape: string;
  vintage: number;
  price: number;
  notes: string;
  pairings: string;
  img: string;
}

export interface MenuItem {
  name: string;
  category: string;
  description: string;
}

export interface InfoPage {
  title: string;
  content: string;
}

export interface SequenceStep {
    title: string;
    content: string;
}

export interface Term {
  term: string;
  pronunciation: string;
  definition: string;
}

export interface MCQ {
  q: string;
  options: string[];
  correctIndex: number;
}
