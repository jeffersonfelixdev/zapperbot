export interface QueueDataProps {
  id?: string
  type?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
}

export interface QueueProvider {
  sendToQueue<T>(queue: string, data: T): Promise<boolean>
  listenToQueue(
    queue: string,
    callback: (data: QueueDataProps) => Promise<void>,
  ): Promise<void>
}
