import { createBuiltMeshHTTPHandler } from '../.mesh'

// Pass Mesh's HTTP handler as an event listener
self.addEventListener('fetch', createBuiltMeshHTTPHandler())