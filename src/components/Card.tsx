import type { ReactNode } from 'react'
import { highlight } from '../lib/highlight'

type Props = { file: string; light?: boolean; caption?: string; children: ReactNode }

/** Janela estilo editor/terminal que faz o papel das "fotos" P&B da referência. */
export function Card({ file, light, caption, children }: Props) {
  return (
    <>
      <div className={`card${light ? ' light' : ''}`}>
        <div className="bar">
          <i />
          <i />
          <i />
          <span>{file}</span>
        </div>
        {children}
      </div>
      {caption && <div className="caption">{caption}</div>}
    </>
  )
}

export function CodeCard({ file, code, caption }: { file: string; code: string; caption?: string }) {
  return (
    <Card file={file} caption={caption}>
      <pre>{highlight(code)}</pre>
    </Card>
  )
}
