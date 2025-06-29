import { useState, useEffect } from 'react'
import { createViewState, JBrowseApp } from '@jbrowse/react-app2'
// @ts-expect-error no font types
import '@fontsource/roboto'

import config from './config'

type ViewModel = ReturnType<typeof createViewState>

function View() {
  const [viewState, setViewState] = useState<ViewModel>()
  const [stateSnapshot, setStateSnapshot] = useState('')

  useEffect(() => {
    const state = createViewState({
      config: {
        ...config,

        // note: workers not working in dev mode currently, planning on workaround soon
        // configuration: {
        //   rpc: {
        //     defaultDriver: 'WebWorkerRpcDriver',
        //   },
        // },
      },

      // makeWorkerInstance: () => {
      //   return new Worker(new URL('./rpcWorker', import.meta.url), {
      //     type: 'module',
      //   })
      // },
    })
    setViewState(state)
  }, [])

  if (!viewState) {
    return null
  }

  return (
    <>
      <h1>JBrowse 2 React App Demo (with vite)</h1>
      <JBrowseApp viewState={viewState} />
      <h3>Code</h3>
      <p>
        The code for this app is available at{' '}
        <a
          href="https://github.com/GMOD/jbrowse-react-app-vite-demo"
          target="_blank"
          rel="noreferrer"
        >
          https://github.com/GMOD/jbrowse-react-app-vite-demo
        </a>
        .
      </p>

      <h3>See the state</h3>
      <div>
        <p>
          The button below will show you the current session, which includes
          things like what region the view is showing and which tracks are open.
          This session JSON object can be used in the{' '}
          <code>defaultSession</code> of <code>createViewState</code>.
        </p>
        <button
          onClick={() => {
            setStateSnapshot(JSON.stringify(viewState.session, undefined, 2))
          }}
        >
          Show session
        </button>
      </div>
      <textarea value={stateSnapshot} readOnly rows={20} cols={80} />
    </>
  )
}

export default View
