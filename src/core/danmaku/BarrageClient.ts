import Events2 from '@root/utils/Events2'

export type LiveEvent = {
  danmu: {
    color: string
    text: string
    imageMap?: Record<
      string,
      {
        url: string
        width: number
        height: number
      }
    >
  }
}

export default abstract class BarrageClient extends Events2<LiveEvent> {
  constructor() {
    super()
  }
  abstract close(): void
}
