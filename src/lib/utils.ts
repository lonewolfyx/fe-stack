import type { NodeObj } from 'mind-elixir'

export function cNode(id: string, topic: string, url: string, extra?: Partial<NodeObj>): NodeObj {
    return {
        id,
        topic,
        hyperLink: url,
        ...extra,
    }
}
