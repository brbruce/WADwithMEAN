# Details of Vagrant SSH login problem

See https://github.com/hashicorp/vagrant/issues/5186 (search for skinneejoe)

Vagrant boxes are packaged with a default private and public key.  During first startup, by default, the new instance of the box gets a new ssh key pair generated and set.  However, if you repackage the box, the new box instance will have the same generated public ssh key in the vagrant instance, but will use the default ssh private key to authenticate, instead of the generated private key.

## Vagrant default private key: Stored on the host

From the web: <https://github.com/hashicorp/vagrant/blob/master/keys/vagrant>

    -----BEGIN RSA PRIVATE KEY-----
    MIIEogIBAAKCAQEA6NF8iallvQVp22WDkTkyrtvp9eWW6A8YVr+kz4TjGYe7gHzI...
    -----END RSA PRIVATE KEY-----

Vagrant default public key: Stored in the vagrant instance

From the web: <https://github.com/hashicorp/vagrant/blob/master/keys/vagrant.pub>

    ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEA6NF8iallvQVp22WDkTkyrtvp9eWW...

--------------------------------------------------------

## In the base vagrant instance which I originally created:  (SSH works)

NOTE: This is not the default vagrant public/private SSH key, because it was replaced during the first up, but the vagrant up can find the correct private key.

Generated Private key (on host):

vagrant ssh-config:

`IdentityFile C:/Users/publi/.vagrant.d/boxes/bentoUbuntu16.04Mean/0/virtualbox/vagrant_private_key`:

    -----BEGIN RSA PRIVATE KEY-----
    MIIEpQIBAAKCAQEA10cr6pbl/+8VqrCepo9gfnvMjgqDtflpJTXWdA9iensejPXa...
    -----END RSA PRIVATE KEY-----

Generated Public key: (In vagrant instance)

`~/.ssh/authorized_keys`:

    ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDXRyvqluX/7xWqsJ6mj2B+e8yO...

--------------------------------------------------------

## In the repackaged vagrant intance:  (SSH does not work)

NOTE: This is the same public key as the original box above, but the vagrant up does not use the correct private key as above, so you can't ssh.

Default Private key (on host):

vagrant ssh-config: (Same as the default Vagrant private key)

`IdentityFile C:/Users/publi/.vagrant.d/insecure_private_key` <------- Not the generated private key!!!!!!!

    -----BEGIN RSA PRIVATE KEY-----
    MIIEogIBAAKCAQEA6NF8iallvQVp22WDkTkyrtvp9eWW6A8YVr+kz4TjGYe7gHzI...
    -----END RSA PRIVATE KEY-----

Generated Public key: (In vagrant instance) <---- Does not match default private key!!!!!!!!

`~/.ssh/authorized_keys`:

    ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDXRyvqluX/7xWqsJ6mj2B+e8yO...

--------------------------------------------------------

## Fixes

NOTE: Copying the original private key into the new box's directory does not work automatically.  But it will if you also add this line to the Vagrant file in the new instance:

  config.ssh.private_key_path = 'C:/Users/publi/.vagrant.d/boxes/bentoUbuntu16.04Mean/0/virtualbox/vagrant_private_key'

You can also change the authentication method from ssh to the user/password.  However, then you need to enter the passwork each time to log in:

  config.ssh.username = 'vagrant'
  config.ssh.password = 'vagrant'

You can also fix the original problem during the packaging by doing these 2 things:

1) Make sure the box instance which you will be packaging has the default Vagrant public key in it.
2) Add this line to the Vagrant file you will use during packaging:

    `config.ssh.insert_key = false`

Then it will use the default private key on the host, and keep the default public key in the instance.
