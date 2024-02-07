const STATE_PREFIX = 'is-'
const DEFAULT_NAMESPACE = 'khh'

const _bem = (namespace, block, blockSuffix, element, modifier) => {
  let cln = `${namespace}-${block}`
  if (blockSuffix) {
    cln += `-${blockSuffix}`
  }
  if (element) {
    cln += `__${element}`
  }
  if (modifier) {
    cln += `--${modifier}`
  }
  return cln
}

export const useBem = (block, namspaceOverrides = '') => {
  const namespace =
    namspaceOverrides.trim() !== '' ? namspaceOverrides : DEFAULT_NAMESPACE

  const b = (blockSuffix = '') => {
    return _bem(namespace, block, blockSuffix, '', '')
  }

  const e = (element = '') => {
    return element ? _bem(namespace, block, '', element, '') : ''
  }

  const m = (modifier = '') => {
    return modifier ? _bem(namespace, block, '', '', modifier) : ''
  }

  const be = (blockSuffix = '', element = '') => {
    return blockSuffix && element
      ? _bem(namespace, block, blockSuffix, element, '')
      : ''
  }

  const em = (element = '', modifier = '') => {
    return element && modifier
      ? _bem(namespace, block, '', element, modifier)
      : ''
  }

  const bm = (blockSuffix = '', modifier = '') => {
    return blockSuffix && modifier
      ? _bem(namespace, block, blockSuffix, '', modifier)
      : ''
  }

  const bem = (blockSuffix = '', element = '', modifier = '') => {
    return blockSuffix && element && modifier
      ? _bem(namespace, block, blockSuffix, element, modifier)
      : ''
  }

  const is = (name, ...args) => {
    const state = args.length >= 1 ? args[0] : true
    return name && state ? `${STATE_PREFIX}${name}` : ''
  }

  return {
    b,
    e,
    m,
    be,
    em,
    bm,
    bem,
    is,
  }
}
