import { Language } from "../interfaces/language";

export class English implements Language {
    alpha2code: string = 'gb';
    code: string = 'eng';
    language: string = 'English';
}

export class French implements Language {
    alpha2code: string = 'fr';
    code: string = 'fra';
    language: string = 'French';
}

export class Norwegian implements Language {
    alpha2code: string = 'no';
    code: string = 'nor';
    language: string = 'Norwegian';
}

export const Languages: Language[] = [
    new English(),
    new French(),
    new Norwegian()
]
