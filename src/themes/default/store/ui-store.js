import { coreStore, extendStore } from 'core/lib/themes'

const state = {
  submenu: {
    depth: false,
    path: []
  }
}

const mutations = {
  setCheckoutMode (state, action) {
    state.checkoutMode = action === true
  },
  setMicrocart (state, action) {
    state.microcart = action === true
    state.overlay = action === true
  },
  setSidebar (state, action) {
    state.sidebar = action === true
    state.overlay = action === true
  },
  setSubmenu (state, { id, depth }) {
    if (id) {
      state.submenu.path.push(id)
    } else if (state.submenu.path.length) {
      setTimeout(() => {
        state.submenu.path.pop()
      }, 300)
    }
    state.submenu.depth = state.submenu.depth > 0 && depth
  },
  setSearchpanel (state, action) {
    state.searchpanel = action === true
    state.overlay = action === true
  },
  setWishlist (state, action) {
    state.wishlist = action === true
    state.overlay = action === true
  }
}

export default extendStore(coreStore('modules/ui-store'), {
  state,
  mutations
})
