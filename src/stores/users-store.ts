import { User } from '@/interfaces/users/user';
import { create } from 'zustand';

type State = {
  users: User[];
};

type Actions = {
  setUsers: (users: User[]) => void;
  //   deleteUsers: (user: User) => void;
};

const useUsersStore = create<State & Actions>((set) => ({
  users: [],
  setUsers: (_users: User[]) => set({ users: _users }),
}));

export default useUsersStore;
