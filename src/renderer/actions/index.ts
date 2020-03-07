import { CounterAction } from './counterActions';
import { FolderAction } from './folderActions';

export type RootActions = CounterAction[keyof CounterAction] | FolderAction[keyof FolderAction];
