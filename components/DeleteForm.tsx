import { deleteItem } from '@/utils/actions';

function DeleteForm({ itemID }: { itemID: string }) {
  const deleteAction = deleteItem.bind(null, itemID);
  return (
    <form action={deleteAction}>
      <button className='capitalize bg-red-300 rounded-lg p-2'>delete</button>
    </form>
  );
}
export default DeleteForm;
