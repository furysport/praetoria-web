import type { TasksPerPhase } from './phase'

type Valoper = string

export type DragoonDescriptor = Readonly<{
  rank: number
  identity: {
    avatar: string
    name: string
  }
  valoper: Valoper
  tasks: {
    completed: number
    started: number
  }
  points: number
}>

export type PodiumDragoon = Pick<DragoonDescriptor, 'rank' | 'identity'>

export type DragoonProfile = Readonly<
  Pick<DragoonDescriptor, 'identity' | 'valoper' | 'points'> & {
    website: string | null
    twitter: string | null
  }
>

export type Dragoon = Readonly<{
  profile: DragoonProfile
  tasksPerPhase: TasksPerPhase[]
}>
