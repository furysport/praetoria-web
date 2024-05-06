import type { PhasesConfig } from '../../types/config.type'
import { dilatatio } from './dilatatio'
import { munitio } from './munitio'
import { fundamen } from './fundamen'
import type { PhaseDTO } from './dto.type'
import { imperium } from './imperium'

const Phases = (phases: PhasesConfig): PhaseDTO[] => [
  fundamen(phases),
  munitio(phases),
  dilatatio(phases),
  imperium(phases)
]
export default Phases
