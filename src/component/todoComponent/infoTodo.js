import Swal from "sweetalert2"
export const details=(item,i,date)=>{
    Swal.fire({
        title: '<strong>Task <u>information</u></strong>',
        icon: 'info',
        html:'<h4>Task: </h4>'+
           i+". "+item+
          '<br/><h4>Date: </h4>'+date+" "/* + time */,
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Ok!',
        confirmButtonAriaLabel: 'Thumbs up, Ok!'
      })
}