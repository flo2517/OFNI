<?php

namespace App\DataPersister;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserDataPersister implements \ApiPlatform\Core\DataPersister\ContextAwareDataPersisterInterface {

    private $_entityManager;
    private $_passwordEncoder;

    public function __construct(EntityManagerInterface $entityManager, UserPasswordHasherInterface $passwordEncoder){
        $this->_entityManager = $entityManager;
        $this->_passwordEncoder = $passwordEncoder;
    }

    /**
     * @param mixed $entityManager
     */
    public function setEntityManager($entityManager): void
    {
        $this->_entityManager = $entityManager;
    }

    /**
     * @inheritDoc
     */
    public function supports($data, array $context = []): bool
    {
        return $data instanceof User;
    }

    /**
     * @inheritDoc
     */
    public function persist($data, array $context = [])
    {
        if($data->getPlainPassword()){
            $data->setPassword(
              $this->_passwordEncoder->hashPassword($data, $data->getPlainPassword())
            );
            $data->eraseCredentials();
        }

        $this->_entityManager->persist($data);
        $this->_entityManager->flush();
    }

    /**
     * @inheritDoc
     * @throws \Doctrine\ORM\ORMException
     */
    public function remove($data, array $context = [])
    {
        $this->_entityManager->remove($data);
        $this->_entityManager->flush();
    }
}