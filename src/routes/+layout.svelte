<script lang="ts">
	import '../app.postcss';
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup, initializeStores, Toast, Modal } from '@skeletonlabs/skeleton';

	initializeStores();
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<Toast buttonDismiss="btn-icon btn-icon-sm hover:rotate-180 duration-300" />
<Modal />
<slot />