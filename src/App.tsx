import { useState } from 'react'

// @ts-expect-error no types for font
import '@fontsource/roboto'
import { JBrowseApp, useCreateViewState } from '@jbrowse/react-app2'
import '@jbrowse/react-app2/styles.css'
import RpcWorker from '@jbrowse/react-app2/esm/rpcWorker?worker'

import { config } from './config'

export default function App() {
  const state = useCreateViewState({
    config,
    makeWorkerInstance: () => new RpcWorker(),
  })
  const [snapshot, setSnapshot] = useState('')
  if (!state) {
    return null
  }
  return (
    <>
      <h1>JBrowse 2 app with vite</h1>
      <JBrowseApp viewState={state} />
      <h3>Code</h3>
      <p>
        The code for this app is at{' '}
        <a href="https://github.com/GMOD/jbrowse-react-app-vite-demo">
          https://github.com/GMOD/jbrowse-react-app-vite-demo
        </a>
        .
      </p>
      <h3>See the state</h3>
      <p>
        The button below shows the current session, which includes the region
        the view is showing and which tracks are open. Pass this object back as{' '}
        <code>session</code> to restore it.
      </p>
      <button
        onClick={() => {
          setSnapshot(JSON.stringify(state.session, undefined, 2))
        }}
      >
        Show session
      </button>
      <textarea value={snapshot} readOnly rows={20} cols={80} />
    </>
  )
}
