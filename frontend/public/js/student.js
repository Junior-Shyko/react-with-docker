

function excluirAluno(id){
    console.log('excluir' , id)
    // swal("Hello world!");
    swal({
      title: "Excluir Usuário",
      text: "Você realmente deseja excluir esse aluno?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((value) => {
      if (value) {
        $.ajax({
          type: "delete",
          url: "http://localhost:5000/api/v1/aluno/excluir-aluno/"+id,
          dataType: "json",
          success: function (response) {
            console.log(response);
            swal("Sucesso!", response.message, "success");
            setTimeout(() => {
              document.location.reload(true);
            }, 2000);
          }
        });
      } else {
        return false;
      }
    });
  }