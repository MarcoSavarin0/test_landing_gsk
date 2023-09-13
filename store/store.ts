import {create, SetState} from 'zustand'
import {devtools} from "zustand/middleware"

interface VisibilitySlice {
	visibility: string
	hz90: string
	title: string
	body: string
	setVisibility: () => void
	set90: (data: string) => void
	setTitle: (data: string) => void
	setBody: (data: string) => void
}
type ModalState = VisibilitySlice

const modalVisibility = (set: SetState<ModalState>) => ({
	visibility: "hidden",
	hz90: "hidden",
	title: "",
	body: "",
	setTitle: (data: string) => {
		set((prev) => ({...prev, title: prev.title == data ? prev.title : data }))
	},
	setBody: (data: string) => {
		set((prev) => ({...prev, body: prev.body == data ? prev.body : data }))
	},
	setVisibility: () => {
		set((prev) => ({ visibility: prev.visibility == "hidden" ? "flex" : "hidden" }))
	},
	set90: () => {
		set((prev) => ({ hz90: prev.visibility }))
	}
})



const useModal = create<ModalState>()(devtools((set) => ({
	...modalVisibility(set),
})))

export default useModal