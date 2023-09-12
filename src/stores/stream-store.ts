import { ISessionStream } from "@/interfaces/stream/session-stream";
import { create } from "zustand";

type State = {
    streams: ISessionStream[];
};

type Actions = {
    setStreams: (streams: ISessionStream[]) => void;
};

const useStreamsStore = create<State & Actions>((set) => ({
    streams: [],
    setStreams: (_streams: ISessionStream[]) => set({ streams: _streams }),
}));

export default useStreamsStore;
