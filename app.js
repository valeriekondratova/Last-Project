function purchaseProduct(event) {
  event.preventDefault();
  console.log(event);
  alert('hello world');
}

function openProductModal() {
  $('#purchaseProductModal').modal('show')
}