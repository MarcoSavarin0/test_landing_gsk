import {create, SetState} from 'zustand'
import {devtools} from "zustand/middleware"

interface VisibilitySlice {
	visibility: string
	title: string
	body: string
	setVisibility: () => void
	setTitle: (data: string) => void
	setBody: (data: string) => void
}
type ModalState = VisibilitySlice

const modalVisibility = (set: SetState<ModalState>) => ({
	visibility: "hidden",
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
	}
})



const useModal = create<ModalState>()(devtools((set) => ({
	...modalVisibility(set),
})))

export default useModal