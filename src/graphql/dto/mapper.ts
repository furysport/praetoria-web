import type { Dragoon, DragoonDescriptor, PodiumDragoon } from '../../entity/dragoon'
import type { QValidatorQuery, SubmissionTaskState } from '../generated/query/types'
import type { PodiumValidatorEdgeDTO, ValidatorEdgeDTO } from './dto.types'

export const mapValidatorEdgeDTOToDragoon = (dto: ValidatorEdgeDTO): DragoonDescriptor => ({
  rank: dto.node.rank,
  identity: {
    name: dto.node.moniker,
    avatar: dto.node.identity?.picture?.href ?? '/image/avatar-fallback.webp'
  },
  valoper: dto.node.valoper,
  points: dto.node.points,
  tasks: {
    completed: dto.node.tasks.completedCount,
    started: dto.node.tasks.startedCount
  }
})

export const mapPodiumValidatorEdgeDTOToPodiumDragoon = (
  dto: PodiumValidatorEdgeDTO
): PodiumDragoon => ({
  rank: dto.node.rank,
  identity: {
    name: dto.node.moniker,
    avatar: dto.node.identity?.picture?.href ?? '/image/avatar-fallback.webp'
  }
})

export const mapValidatorDTOToDragoon = (dto: QValidatorQuery['validator']): Dragoon | null =>
  dto
    ? {
        profile: {
          identity: {
            name: dto.moniker,
            avatar: dto.identity?.picture?.href ?? '/image/avatar-fallback.webp'
          },
          valoper: dto.valoper,
          website: dto.website ?? null,
          twitter: dto.twitter ?? null,
          points: dto.points
        },

        tasksPerPhase: dto.tasks.perPhase.map(perPhase => ({
          phase: {
            number: perPhase.phase.number,
            started: perPhase.phase.started,
            name: perPhase.phase.name,
            tasks: perPhase.tasks.map(t => ({
              name: t.task.name,
              completed: t.completed,
              points: t.earnedPoints,
              finished: t.task.finished,
              started: t.task.started,
              ...('submitted' in (t as SubmissionTaskState) && {
                submitted: (t as SubmissionTaskState).submitted
              })
            })),
            points: perPhase.points
          }
        }))
      }
    : null
