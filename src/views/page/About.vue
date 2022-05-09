<template>
  <!-- Navbar-->
  <nav class="navbar navbar-expand-lg navbar-light shadow-sm mb-3" style="background-color: #F6F54D">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="../components/logoku.png" alt="" width="30" height="24" class="d-inline-block align-text-top" />
        Ini Al-Qur'an
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link :to="{ name: 'page.home' }" class="nav-link" href="#Home">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'page.about' }" class="nav-link active" aria-current="page" href="#about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'page.contact' }" class="nav-link" href="#contact">Contact Me</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- Akhir Navbar-->

  <!-- Jumbotron-->
  <section class="jumbotron text-center mb-5  p-3" style="">
    <img src="../components/logoku.png" alt="Logo Quran" width="200" class="rounded-circle img-thumbnail" />
    <h1 class="display-4">Ini Al-Qur'an</h1>
    <hr>
  </section>
  <!-- Akhir Jumbotron-->

  <!-- About-->
  <section id="about">
    <div class="container">
      <div class="row text-center mt-5">
        <div class="col">
          <h2 class="display-7">About Ini Al-Qur'an</h2>
        </div>
      </div>
      <div class="col justify-content-center fs-5 text-center">
        <div class=" fs-6">
          <p>“Ibadah merupakan salah satu kewajiban yang harus dijalankan oleh setiap orang yang beragama. Tanpa alasan apapun, kewajiban beribadah adalah prioritas setiap umat. Bagi yang beragama muslim ibadah wajib yaitu berupa sholat, puasa, zakat berhaji bila mampu. Namun, membaca Alquran juga merupakan ibadah yang bermanfaat dan tak kalah pentingnya. Kesibukan dunia kerja dan berbagai macam kegiatan lainnya membuat kita kadang lupa untuk mempelajari ayat Alquran. Sehingga tak jarang banyak orang tua yang belum pandai dan terbata-bata membaca al-quran. Padahal ada banyak manfaat yang didapat. Ini Al-qur’an adalah solusi bagi kita umat muslim yang tetap ingin mempelajari Alquran dengan cara yang mudah. ”</p>
        </div>


      </div>
    </div>
  </section>
  <!-- Akhir About-->



  <!-- Footer -->
  <footer class="text-dark text-center fixed-bottom " style="background-color: #F6F54D">
    <p>Created by <a href="https://instagram.com/mhdrezaaa__?igshid=YmMyMTA2M2Y=" class="text-dark fw-bold">Muhammad Reza</a></p>
  </footer>
  <!-- Akhir Footer -->
</template>

<script>
export default {};
</script>