import defaultResolve, {
    PublishAction,
    DiscardChangesAction,
} from 'part:@sanity/base/document-actions'

export default function resolveDocumentAction(props) {
    if (['landingPage', 'site'].includes(props.type)) {
        return [PublishAction, DiscardChangesAction]
    } else {
        return defaultResolve(props)
    }
}
