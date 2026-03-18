import { DanmakuBase } from './'

export type DanmakuMoveType = 'top' | 'right' | 'bottom'

export type DanmakuInitData = {
  id?: string
  text: string
  time?: number
  color: string
  type: DanmakuMoveType
  imageMap?: Record<string, { url: string; width: number; height: number }>
}
export type DanmakuEngineEvents = {
  'danmaku-enter': DanmakuBase
  'danmaku-leaveTunnel': DanmakuBase
  'danmaku-leave': DanmakuBase
  'container-resize': void
}
