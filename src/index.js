
import Dante from './components/dante'
import DanteEditor from './components/dante_editor'
import DanteImagePopover from './components/popovers/image'
import DanteAnchorPopover from './components/popovers/link'

import DanteInlineTooltip from './components/popovers/addButton'
import DanteTooltip from './components/popovers/toolTip'

import ImageBlock from './components/blocks/image'
import EmbedBlock from './components/blocks/embed'
import VideoBlock from './components/blocks/video'
import PlaceholderBlock from './components/blocks/placeholder'

import { 
  resetBlockWithType, 
  addNewBlockAt } from './model/index.js'

// Sorry for editing
import Link from './components/decorators/link'
import findEntities from './utils/find_entities'


module.exports = {
  Dante, 
  DanteEditor,
  DanteImagePopover,
  DanteAnchorPopover,
  DanteInlineTooltip,
  DanteTooltip,
  ImageBlock,
  EmbedBlock,
  VideoBlock,
  PlaceholderBlock,
  resetBlockWithType,
  addNewBlockAt,
  Link,
  findEntities
}