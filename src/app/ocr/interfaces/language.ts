export interface Language {
    alpha2code: string;
    code: string;
    language: string;
}

export interface English extends Language {
    alpha2code: 'gb';
    code: 'eng';
    language: 'English';
}

export interface French extends Language {
    alpha2code: 'fr';
    code: 'fra';
    language: 'French';
}

export interface Norwegian extends Language {
    alpha2code: 'no';
    code: 'nor';
    language: 'Norwegian';
}