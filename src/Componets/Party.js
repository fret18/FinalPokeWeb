import React, { Component } from 'react';
import { useState } from "react";
import axios from 'axios';
import { Start } from './StartScreen';
//Styled Componets for party system
import { FlipCard } from './FlipCard';
import { FlipCardInner } from './FlipCard';
import { Hover } from './FlipCard';
import { FlipcardFrontandBack } from './FlipCard';
import { FlipcardFront } from './FlipCard';
import { FlipcardBack } from './FlipCard';
//NEW FLIP CARD
import { Container } from './FlipCard';
import { Card } from './FlipCard';
import { Front } from './FlipCard';
import { Back } from './FlipCard';
import { request } from './Request';

export function Party() {


    return (
        <Container>
                <Card>
                    <Hover>
                        <Front>This is the front</Front>
                        <Back>This is the back</Back>
                    </Hover>
                </Card>
        </Container>
    );
}

//export default Party;