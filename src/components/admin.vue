<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 mx-auto">
        <div class="login-form">
          <h3>{{ text.title }} </h3>
          <button class="btn btn-info btn-create" @click.prevent="createShow('#modal-create')">Tambah data</button>
          <div class="table-responsive">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>No</th>
                <th>NIM</th>
                <th>Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in items" :key="item.id"  v-if="items && items.length > 0 && index <= limitationList">
                <td>{{ index+1}} </td>
                <td>{{ item.nim }} </td>
                <td>{{ item.nama }} </td>
                <td>
                  <a href="#" @click.prevent="detailShow('#modal-show', item)">Detail</a> |
                  <a href="#" @click.prevent="deleteShow('#modal-delete', item)">Delete</a> |
                  <a href="#" @click.prevent="updateShow('#modal-update', item)">Update</a>
                </td>
              </tr>
            </tbody>
          </table>
          </div>

          <!-- The Modal Detail-->
          <div class="modal fade" id="modal-show">
            <div class="modal-dialog modal-md">
              <div class="modal-content">
              
                <!-- Modal Header -->
                <div class="modal-header">
                  <h4 class="modal-title">Detail</h4>
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                
                <!-- Modal body -->
                <div class="modal-body">
                  <p>Nim: {{data.nim}}</P>
                  <p>Email: {{data.email}}</P>
                  <p>Nama: {{data.nama}}</P>
                  <p>Tempat Lahir: {{data.tempat_lahir}}</P>
                  <p>Tanggal Lahir: {{data.tanggal_lahir}}
                  <p>Jenis Kelamin: {{data.jenis_kelamin}}</P>
                  <p>NIK: {{data.nik}}</P>
                  <p>Alamat: {{data.alamat}}</P>
                  <p>Kelurahan: {{data.nama_kelurahan}}</P>
                  <p>Kecamatan: {{data.nama_kecamatan}}</P>
                  <p>Kabupaten/Kota: {{data.nama_kabupaten_kota}}</P>
                  <p>Provinsi: {{data.nama_provinsi}}</P>
                  <p>No Telepon{{data.nomor_telepon}}</P>
                  <p>No Handphone{{data.nomor_handphone}}</P>
                  <p>Prodi: {{data.nama_prodi}}</P>
                  <p>Agama: {{data.nama_agama}}</P>
                </div>
                
                <!-- Modal footer -->
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
                
              </div>
            </div>
          </div>

          <!-- The Modal Create-->
          <div class="modal fade" id="modal-create">
            <div class="modal-dialog modal-md">
              <div class="modal-content">
              
                <!-- Modal Header -->
                <div class="modal-header">
                  <h4 class="modal-title">Tambah</h4>
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                
                <!-- Modal body -->
                <div class="modal-body">
                  <div class="form-group">
                    <label for="">Nama:</label>
                    <input type="text" class="form-control" v-model="data.nama" @keyup="actionInput()">
                  </div>
                  <div class="form-group">
                    <label for="">Tempat Lahir:</label>
                    <input type="text" class="form-control" v-model="data.tempat_lahir" @keyup="actionInput()">
                  </div>
                  <div class="form-group">
                    <label for="">Tanggal Lahir:</label>
                    <input type="text" class="form-control" v-model="data.tanggal_lahir" @keyup="actionInput()">
                  </div>
                  <div class="form-group">
                    <label for="">Jenis Kelamin:</label>
                    <select class="form-control" v-model="data.jenis_kelamin" @keyup="actionInput()">
                      <option value="L">Laki-laki</option>
                      <option value="P">Perempuan</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="">NIK:</label>
                    <input type="text" class="form-control" v-model="data.nik" @keyup="actionInput()">
                  </div>
                  <div class="form-group">
                    <label for="">Alamat:</label>
                    <textarea class="form-control" v-model="data.alamat" @keyup="actionInput()"></textarea>
                  </div>
                  <div class="form-group">
                    <label for="">Provinsi:</label>
                    <select class="form-control" v-model="data.Kelurahan" @keyup="actionInput()">
                      <option v-for="list in list.provinsi" :key="list.id_provinsi" :value="list.id_provinsi">{{ list.nama_provinsi }}</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="">No Telepon:</label>
                    <input type="text" class="form-control" v-model="data.nomor_telepon" @keyup="actionInput()">
                  </div>
                  <div class="form-group">
                    <label for="">No Handphone:</label>
                    <input type="text" class="form-control" v-model="data.nomor_handphone" @keyup="actionInput()">
                  </div>
                  <div class="form-group">
                    <label for="">Email:</label>
                    <input type="email" class="form-control" v-model="data.email" @keyup="actionInput()">
                  </div>
                  <div class="form-group">
                    <label for="">Prodi:</label>
                    <select class="form-control" v-model="data.id_prodi" @keyup="actionInput()">
                      <option v-for="list in list.prodi" :key="list.id_prodi" :value="list.id_prodi">{{ list.nama_prodi }}</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="">Agama:</label>
                    <select class="form-control" v-model="data.id_agama" @keyup="actionInput()">
                      <option v-for="list in list.agama" :key="list.id_agama" :value="list.id_agama">{{ list.nama_agama }}</option>
                    </select>
                  </div>
                </div>
                
                <!-- Modal footer -->
                <div class="modal-footer">
                  <button type="button" class="btn btn-danger" @click="createItem('#modal-create')">Tambah</button>
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
                
              </div>
            </div>
          </div>

          <!-- The Modal Update-->
          <div class="modal fade" id="modal-update">
            <div class="modal-dialog modal-md">
              <div class="modal-content">
              
                <!-- Modal Header -->
                <div class="modal-header">
                  <h4 class="modal-title">Update</h4>
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                
                <!-- Modal body -->
                <div class="modal-body">
                                    <div class="form-group">
                    <label for="">Nama:</label>
                    <input type="text" class="form-control" v-model="data.nama" @keyup="actionInput()">
                  </div>
                  <div class="form-group">
                    <label for="">Tempat Lahir:</label>
                    <input type="text" class="form-control" v-model="data.tempat_lahir" @keyup="actionInput()">
                  </div>
                  <div class="form-group">
                    <label for="">Tanggal Lahir:</label>
                    <input type="text" class="form-control" v-model="data.tanggal_lahir" @keyup="actionInput()">
                  </div>
                  <div class="form-group">
                    <label for="">Jenis Kelamin:</label>
                    <select class="form-control" v-model="data.jenis_kelamin" @keyup="actionInput()">
                      <option value="L">Laki-laki</option>
                      <option value="P">Perempuan</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="">NIK:</label>
                    <input type="text" class="form-control" v-model="data.nik" @keyup="actionInput()">
                  </div>
                  <div class="form-group">
                    <label for="">Alamat:</label>
                    <textarea class="form-control" v-model="data.alamat" @keyup="actionInput()"></textarea>
                  </div>
                  <div class="form-group">
                    <label for="">Provinsi:</label>
                    <select class="form-control" v-model="data.Kelurahan" @keyup="actionInput()">
                      <option v-for="list in list.provinsi" :key="list.id_provinsi" :value="list.id_provinsi">{{ list.nama_provinsi }}</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="">No Telepon:</label>
                    <input type="text" class="form-control" v-model="data.nomor_telepon" @keyup="actionInput()">
                  </div>
                  <div class="form-group">
                    <label for="">No Handphone:</label>
                    <input type="text" class="form-control" v-model="data.nomor_handphone" @keyup="actionInput()">
                  </div>
                  <div class="form-group">
                    <label for="">Email:</label>
                    <input type="email" class="form-control" v-model="data.email" @keyup="actionInput()">
                  </div>
                  <div class="form-group">
                    <label for="">Prodi:</label>
                    <select class="form-control" v-model="data.id_prodi" @keyup="actionInput()">
                      <option v-for="list in list.prodi" :key="list.id_prodi" :value="list.id_prodi">{{ list.nama_prodi }}</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="">Agama:</label>
                    <select class="form-control" v-model="data.id_agama" @keyup="actionInput()">
                      <option v-for="list in list.agama" :key="list.id_agama" :value="list.id_agama">{{ list.nama_agama }}</option>
                    </select>
                  </div>
                </div>
                
                <!-- Modal footer -->
                <div class="modal-footer">
                  <button type="button" class="btn btn-danger" @click="updateItem('#modal-update', data.id_user)">Ubah</button>
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
                
              </div>
            </div>
          </div>

          <!-- The Modal Delete-->
          <div class="modal fade" id="modal-delete">
            <div class="modal-dialog modal-md">
              <div class="modal-content">
              
                <!-- Modal Header -->
                <div class="modal-header">
                  <h4 class="modal-title">Hapus</h4>
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                
                <!-- Modal body -->
                <div class="modal-body">
                  <p>Yakin hapus data ?</p>
                </div>
                
                <!-- Modal footer -->
                <div class="modal-footer">
                  <button type="button" class="btn btn-danger" @click="deleteItem('#modal-delete', data.id_user)">Delete</button>
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
                
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  import vue from 'vue';
  export default {
    name: 'Admin',
    data () {
      return {
        items: {},
        limitationList: 5,
        text: {
          title: 'Daftar Mahasiswa',
          button: 'Login',
          forget: 'Forget Password?'
        },
        data: {
          id_user: '',
          nim: '',
          email: '',
          nama: '',
          tempat_lahir: '',
          tanggal_lahir: '',
          jenis_kelamin: '',
          nik: '',
          alamat: '',
          id_kelurahan: '',
          nama_kelurahan: '',
          id_kecamatan: '',
          nama_kecamatan: '',
          id_kabupaten_kota: '',
          nama_kabupaten_kota: '',
          id_provinsi: '',
          nama_provinsi: '',
          nomor_telepon: '',
          nomor_handphone: '',
          id_prodi: '',
          nama_prodi: '',
          id_agama: '',
          nama_agama: '',
        },
        list: {
          prodi: {},
          agama: {},
          provinsi: {}
        }
      }
    },
    filters: {

    },
    created() {
      this.getItem()
    },
    methods: {
      getItem() {
        let url = '/api/mahasiswa'; 
        let key = {
            headers: { Authorization: vue.auth.getToken() }
        }

        this.$http.get(url, key).then( res => {
          this.items = res.data;
          console.log('success')
        }).catch( err => {
          console.log('error')
        })
      },
      actionInput() {

      },
      detailShow(e, a) {
        let id = a.id_user
        let url = '/api/mahasiswa/'+id
        let key = {
            headers: { Authorization: vue.auth.getToken() }
        }

        this.$http.get(url, key).then( res => {
          this.data = {
            id_user: res.data.id_user,
            nim: res.data.nim,
            email: res.data.email,
            nama: res.data.nama,
            tempat_lahir: res.data.tempat_lahir,
            tanggal_lahir: res.data.tanggal_lahir,
            jenis_kelamin: res.data.jenis_kelamin,
            nik: res.data.nik,
            alamat: res.data.alamat,
            id_kelurahan: res.data.id_kelurahan,
            nama_kelurahan: res.data.nama_kelurahan,
            id_kecamatan: res.data.id_kecamatan,
            nama_kecamatan: res.data.nama_kecamatan,
            id_kabupaten_kota: res.data.id_kabupaten_kota,
            nama_kabupaten_kota: res.data.nama_kabupaten_kota,
            id_provinsi: res.data.id_provinsi,
            nama_provinsi: res.data.nama_provinsi,
            nomor_telepon: res.data.nomor_telepon,
            nomor_handphone: res.data.nomor_handphone,
            id_prodi: res.data.id_prodi,
            nama_prodi: res.data.nama_prodi,
            id_agama: res.data.id_agama,
            nama_agama: res.data.nama_agama,
          }
          console.log('success')
          $(e).modal('show');
        }).catch( err => {
          console.log('error')
        })
      },
      createShow(e) {
        this.data = {
            data: {
            id_user: '',
            nim: '',
            email: '',
            nama: '',
            tempat_lahir: '',
            tanggal_lahir: '',
            jenis_kelamin: '',
            nik: '',
            alamat: '',
            id_kelurahan: '',
            nama_kelurahan: '',
            id_kecamatan: '',
            nama_kecamatan: '',
            id_kabupaten_kota: '',
            nama_kabupaten_kota: '',
            id_provinsi: '',
            nama_provinsi: '',
            nomor_telepon: '',
            nomor_handphone: '',
            id_prodi: '',
            nama_prodi: '',
            id_agama: '',
            nama_agama: '',
          }
        }
        let url = '/api/prodi/'
        let url2 = '/api/agama/'
        let url3 = '/api/provinsi/'
        let key = {
            headers: { Authorization: vue.auth.getToken() }
        }

        this.$http.get(url, key).then( res => {
          this.list.prodi = res.data
          console.log('success')
        }).catch( err => {
          console.log('error')
        })
        this.$http.get(url2, key).then( res => {
          this.list.agama = res.data
          console.log('success')
        }).catch( err => {
          console.log('error')
        })
        this.$http.get(url3, key).then( res => {
          this.list.provinsi = res.data
          $(e).modal('show');
          console.log('success')
        }).catch( err => {
          console.log('error')
        })
      },
      createItem(e) {
        let url = '/api/mahasiswa/'
        let key = {
            headers: { Authorization: vue.auth.getToken(),
            'Content-Type': 'application/json'
            }
        }
        let data = this.data

        this.$http.post(url, data, key).then( res => {
          console.log('success')
          $(e).modal('hide');
        }).catch( err => {
          console.log('error')
        })      
      },
      updateShow(e, a) {
        this.data.id_user = a
          this.data = {
            id_user: a.id_user,
            nim: a.nim,
            email: a.email,
            nama: a.nama,
            tempat_lahir: a.tempat_lahir,
            tanggal_lahir: a.tanggal_lahir,
            jenis_kelamin: a.jenis_kelamin,
            nik: a.nik,
            alamat: a.alamat,
            id_kelurahan: a.id_kelurahan,
            nama_kelurahan: a.nama_kelurahan,
            id_kecamatan: a.id_kecamatan,
            nama_kecamatan: a.nama_kecamatan,
            id_kabupaten_kota: a.id_kabupaten_kota,
            nama_kabupaten_kota: a.nama_kabupaten_kota,
            id_provinsi: a.id_provinsi,
            nama_provinsi: a.nama_provinsi,
            nomor_telepon: a.nomor_telepon,
            nomor_handphone: a.nomor_handphone,
            id_prodi: a.id_prodi,
            nama_prodi: a.nama_prodi,
            id_agama: a.id_agama,
            nama_agama: a.nama_agama,
          }
        $(e).modal('show');
      },
      updateItem(e, a) {
        let id = a.id_user
        let url = '/api/mahasiswa/'+id
        let key = {
            headers: { Authorization: vue.auth.getToken() }
        }

        this.$http.delete(url, key).then( res => {
          console.log('success')
          $(e).modal('hide');
        }).catch( err => {
          console.log('error')
        })      
      },
      deleteShow(e, a) {
        this.data.id_user = a
        $(e).modal('show');
      },
      deleteItem(e, a) {
        let id = a.id_user
        let url = '/api/mahasiswa/'+id
        let key = {
            headers: { Authorization: vue.auth.getToken() }
        }

        this.$http.delete(url, key).then( res => {
          console.log('success')
          $(e).modal('hide');
        }).catch( err => {
          console.log('error')
        })      
      }
    },
  }
</script>

<style scoped>
  .login-form {
      background-color: #ffff;
  }
  .login-form h3 {
    color: #0062cc;
  }
  .table-bordered {
    background-color: #ffff;
  }
  .modal-header, .modal-body {
    color: #0062cc;
  }
  .btn-create {
    margin-bottom: 20px;
  }
</style>
