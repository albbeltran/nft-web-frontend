import styled from "styled-components";

const Container = styled.div`
    justify-content: center;
    margin: 0;
    align-items: center;
    align-content: center;
    margin: 0 auto;

    .carousel-inner {
        max-width: 100%;

        .carousel-item {
            max-width: 100%;
            width: auto;
            transition: transform 1s ease-in-out;
            
            .row {
                .col {
                    padding: 0;
                    width: 180px;

                    &:hover {
                        cursor: pointer;
                    }
                }
            }
        }

        .active.carousel-item-start {
            display: none;
        }
    }
    
    .carousel-control-prev {
        position: fixed;
        margin: auto;
        top: 475px;
        right: 1150px;

        .carousel-control-prev-icon {
            width: 25px;
        }
    }

    .carousel-control-next {
        position: fixed;
        margin: auto;
        top: 475px;
        left: 1150px;
        
        .carousel-control-next-icon {
            width:25px;
        }
    }

`

export { Container };