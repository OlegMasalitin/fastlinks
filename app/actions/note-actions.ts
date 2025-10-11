import { CommonNote, ConfidentialNote } from './Note';

export async function getAvailableCommonYears() {
  return [2022, 2023, 2024, 2025];
}

export async function getAvailableConfidentialYears() {
  return [2024, 2025];
}

const commonNotes = [
  { id: 'xxx1', text: 'Test 2022-1', description: '', timestamp: new Date(2022, 1, 1).toISOString(), year: 2022 },
  { id: 'xxx2', text: 'Test 2022-2', description: '', timestamp: new Date(2022, 1, 1).toISOString(), year: 2022 },
  { id: 'xxx3', text: 'Test 2023-1', description: '', timestamp: new Date(2023, 1, 1).toISOString(), year: 2023 },
  { id: 'xxx4', text: 'Test 2023-2', description: '', timestamp: new Date(2023, 1, 1).toISOString(), year: 2023 },
  { id: 'xxx5', text: 'Test 2024-1', description: '', timestamp: new Date(2024, 1, 1).toISOString(), year: 2024 },
  { id: 'xxx6', text: 'Test 2024-2', description: '', timestamp: new Date(2024, 1, 1).toISOString(), year: 2024 },
  { id: 'xxx7', text: 'Test 2025-1', description: '', timestamp: new Date(2025, 1, 1).toISOString(), year: 2025 },
  { id: 'xxx8', text: 'Test 2025-2', description: '', timestamp: new Date(2025, 1, 1).toISOString(), year: 2025 },
] as CommonNote[];

const confidentialNotes = [
  /*{
    id: 'xxx1',
    login: 'Test 2022-1',
    password: '111',
    description: 'secreet pwd 11',
    timestamp: new Date(2022, 1, 1).toISOString(),
    year: 2022,
  },
  {
    id: 'xxx2',
    login: 'Test 2022-2',
    password: '222',
    description: 'secreet pwd 12',
    timestamp: new Date(2022, 1, 1).toISOString(),
    year: 2022,
  },*/
  {
    id: 'xxx3',
    login: 'Test 2023-1',
    password: '333',
    description: 'secreet pwd 13',
    timestamp: new Date(2023, 1, 1).toISOString(),
    year: 2023,
  },
  {
    id: 'xxx4',
    login: 'Test 2023-2',
    password: '444',
    description: 'secreet pwd 14',
    timestamp: new Date(2023, 1, 1).toISOString(),
    year: 2023,
  },
  {
    id: 'xxx5',
    login: 'Test 2024-1',
    password: '555',
    description: 'secreet pwd 15',
    timestamp: new Date(2024, 1, 1).toISOString(),
    year: 2024,
  },
  {
    id: 'xxx6',
    login: 'Test 2024-2',
    password: '5555',
    description: 'secreet pwd 16',
    timestamp: new Date(2024, 1, 1).toISOString(),
    year: 2024,
  },
  {
    id: 'xxx7',
    login: 'Test 2025-1',
    password: '777',
    description: 'secreet pwd 17',
    timestamp: new Date(2025, 1, 1).toISOString(),
    year: 2025,
  },
  {
    id: 'xxx8',
    login: 'Test 2025-2',
    password: '888',
    description: 'secreet pwd 18',
    timestamp: new Date(2025, 1, 1).toISOString(),
    year: 2025,
  },
] as ConfidentialNote[];

export async function getYearCommonNotes(year: number): Promise<CommonNote[]> {
  return commonNotes.filter((note) => note.year === year);
}

export async function getYearConfidentialNotes(year: number): Promise<ConfidentialNote[]> {
  return confidentialNotes.filter((note) => note.year === year);
}

export async function loadCommonNote(id: string): Promise<CommonNote | null> {
  return null;
}
