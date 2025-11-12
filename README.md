# PRAKTEK GIT

## Inisialisasi GIT

```sh
$ git init
```

## Perubahan Sementara (staging)
Menyimpan perubahan sementara dari working directori kedalan staging area
```sh
$ git add <... dir_file>
$ git add <... dir_folder>
```

## Perubahan Permanen (Commit)
Menyimpan seluruh staging menjadi permanen
[conventional commit](https://www.conventionalcommits.org/en/v1.0.0/)
[agular conventional](https://github.com/qoomon/git-conventional-commits)
```sh
$ git commit
$ git commit -m "<type>[optional scope]: <description>"
```

## Pengecakan status working Dir
Bisa di gunakan untuk melihat status baik yang sudah di staging area atau pun belum
```sh
$ git status
```
Bisa digunakan untuk melihat riwayat/history commit
```sh
$ git log
```

## Manajemen git Remote
```sh
$ git remote
```
Digunakan utuk menghubungkan antara git yang di komputer lokal dengan git yang ada di penyedia layanan git(github, gitlab, dll)