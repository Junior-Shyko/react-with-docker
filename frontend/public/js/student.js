

function excluirAluno(id){
  var token = window.sessionStorage.getItem('user');
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
          headers: {
            'Authorization': `bearer ${token}`
          },
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